"use client";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Captions, Mail, MessageCircleMore, User } from "lucide-react";
import axios from "axios";
import { render } from "@react-email/render";
import ReportedEmail from "~/lib/mail/templates/ReportedEmail";
import Template2 from "~/lib/mail/templates/Template2";
import Template3 from "~/lib/mail/templates/Template3";

interface EmailFormProps {
  onDataChange: (data: {
    emails: string;
    subject: string;
    message: string;
    fullname: string;
    template: string;
    company?: string;
    phone?: string;
    imageUrl?: string;
  }) => void;
  initalData?: {
    emails: string;
    subject: string;
    message: string;
    fullname: string;
    template: string;
    company?: string;
    phone?: string;
    imageUrl?: string;
  };
}
const EmailForm: React.FC<EmailFormProps> = ({ onDataChange, initalData }) => {
  const [formData, setFormData] = useState({
    emails: "",
    subject: "",
    message: "",
    fullname: "",
    template: "template1",
    company: "",
    phone: "",
    imageUrl: "",
  });

  useEffect(() => {
    if (initalData) {
      setFormData({ ...formData, ...initalData });
    }
  }, [[initalData]]);

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataChange(newData);
  };

  const getSelectedTemplate = () => {
    const props = {
      fullname: formData.fullname || "Khách hàng",
      subject: formData.subject || "Thông báo mới",
      message: formData.message || "Bạn có một thông báo mới.",
      company: formData.company || "Công ty của bạn",
      phone: formData.phone || "0123456789",
      imageUrl: formData.imageUrl || "https://via.placeholder.com/150",
    };

    switch (formData.template) {
      case "template1":
        return <ReportedEmail {...props} />;
      case "template2":
        return <Template2 {...props} />;
      case "template3":
        return <Template3 {...props} />;
      default:
        return null;
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const sendEmailUrl = process.env.NEXT_PUBLIC_API_SENDEMAIL_URL;

    if (!sendEmailUrl) {
      console.error("Send email URL is not defined");
      return;
    }

    try {
      const emailHtml = await render(getSelectedTemplate());

      const response = await axios.post(sendEmailUrl, {
        to: formData.emails || "",
        content: emailHtml,
        subject: formData.subject || "test",
        // fullname: formData.fullname || "test",
      });

      if (response && response.status !== 204) {
        console.error("Failed to send email:", response.data);
        return;
      }

      const resetData = {
        emails: "",
        subject: "",
        message: "",
        fullname: "",
        template: formData.template,
        company: "",
        phone: "",
        imageUrl: "",
      };
      setFormData(resetData);
      onDataChange(resetData);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="p-2 h-full">
      <form className="flex flex-col gap-4 mt-4" onSubmit={handleSendEmail}>
        <div className="flex flex-col gap-2">
          <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="email">
            <Mail /> Email to send:
          </label>
          <Textarea
            name="emails"
            value={formData.emails}
            placeholder="Type email addresses here..."
            onChange={(e) => handleInputChange("emails", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="subject">
            <Captions /> Subject:
          </label>
          <Input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            placeholder="Type subject here..."
            required
            onChange={(e) => handleInputChange("subject", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 ">
          <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="fullname">
            <User /> Full name:
          </label>
          <Input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            placeholder="Type full name here..."
            required
            onChange={(e) => handleInputChange("fullname", e.target.value)}
          />
        </div>

        {/* <div className="flex flex-col gap-2">
          <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="message">
            <MessageCircleMore /> Message:
          </label>
          <Textarea
            name="message"
            value={formData.message}
            placeholder="Type your message here..."
            onChange={(e) => handleInputChange("message", e.target.value)}
          />
        </div> */}

        <Button type="submit" className="self-start mt-4 cursor-pointer">
          Send
        </Button>
      </form>
    </div>
  );
};

export default EmailForm;
