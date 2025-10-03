"use client";
import React, { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Captions, Image, Link, Mail, MessageCircleMore, User, Plus, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import ReportedEmail from "~/lib/mail/templates/ReportedEmail";
import Template2 from "~/lib/mail/templates/Template2";
import Template3 from "~/lib/mail/templates/Template3";
import { render } from "@react-email/render";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

interface EmailFormProps {
  onDataChange: (data: {
    emails: string;
    subject: string;
    message: string;
    template: string;
    company?: string;
    phone?: string;
    imageUrl?: string;
    linkUrl?: string[];
    textLinkUrl?: string[];
  }) => void;
  initalData?: {
    emails: string;
    subject: string;
    message: string;
    template: string;
    company?: string;
    phone?: string;
    imageUrl?: string;
    linkUrl?: string[];
    textLinkUrl?: string[];
  };
}

const Template1Form: React.FC<EmailFormProps> = ({ onDataChange, initalData }) => {
  const [formData, setFormData] = useState({
    emails: "",
    subject: "",
    message: "",
    template: "template3",
    company: "",
    phone: "",
    imageUrl: "",
    linkUrl: [""],
    textLinkUrl: [""],
  });

  const [quillKey, setQuillKey] = useState(0);

  useEffect(() => {
    if (initalData) {
      setFormData({ ...formData, ...initalData });
    }
  }, [initalData]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "list",
    "bullet",
    "align",
    "link",
  ];

  const getSelectedTemplate = () => {
    const props = {
      subject: formData.subject || "Thông báo mới",
      message: formData.message || "Bạn có một thông báo mới.",
      company: formData.company || "Công ty của bạn",
      phone: formData.phone || "0123456789",
      imageUrl: formData.imageUrl || "https://via.placeholder.com/150",
      linkUrl: formData.linkUrl.filter((link) => link.trim() !== ""),
      textLinkUrl: formData.textLinkUrl.filter((text) => text.trim() !== ""),
    };

    switch (formData.template) {
      case "template1":
        return <ReportedEmail {...props} />;
      case "template2":
        return <Template2 {...props} />;
      case "template3":
        return <Template3 {...props} />;
      default:
        return <ReportedEmail {...props} />;
    }
  };

  const handleInputChange = (field: string, value: string) => {
    const newData = { ...formData, [field]: value };
    setFormData(newData);
    onDataChange(newData);
  };

  const handleQuillChange = (content: string) => {
    const newData = { ...formData, message: content };
    setFormData(newData);
    onDataChange(newData);
  };

  const handleLinkUrlChange = (index: number, value: string) => {
    const newLinkUrl = [...formData.linkUrl];
    newLinkUrl[index] = value;
    const newData = { ...formData, linkUrl: newLinkUrl };
    setFormData(newData);
    onDataChange(newData);
  };

  const handleTextLinkUrlChange = (index: number, value: string) => {
    const newTextLinkUrl = [...formData.textLinkUrl];
    newTextLinkUrl[index] = value;
    const newData = { ...formData, textLinkUrl: newTextLinkUrl };
    setFormData(newData);
    onDataChange(newData);
  };

  const addLinkUrl = () => {
    const newData = { ...formData, linkUrl: [...formData.linkUrl, ""], textLinkUrl: [...formData.textLinkUrl, ""] };
    setFormData(newData);
    onDataChange(newData);
  };

  const removeLinkUrl = (index: number) => {
    if (formData.linkUrl.length > 1) {
      const newLinkUrl = formData.linkUrl.filter((_, i) => i !== index);
      const newTextLinkUrl = formData.textLinkUrl.filter((_, i) => i !== index);
      const newData = { ...formData, linkUrl: newLinkUrl, textLinkUrl: newTextLinkUrl };
      setFormData(newData);
      onDataChange(newData);
    }
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const sendEmailUrl = process.env.NEXT_PUBLIC_API_SENDEMAIL_URL;

    if (!sendEmailUrl) {
      console.error("Send email URL is not defined");
      return;
    }

    if (!formData.emails.trim()) {
      alert("Please enter email address");
      return;
    }

    try {
      const template = getSelectedTemplate();
      const emailHtml = await render(template);

      const response = await axios.post(sendEmailUrl, {
        to: formData.emails,
        content: emailHtml,
        subject: formData.subject || "Thông báo từ BigDataTech",
      });

      const resetData = {
        emails: "",
        subject: "",
        message: "",
        template: formData.template,
        company: "",
        phone: "",
        imageUrl: "",
        linkUrl: [""],
        textLinkUrl: [""],
      };
      setFormData(resetData);
      onDataChange(resetData);
      setQuillKey((prev) => prev + 1);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <form onSubmit={handleSendEmail} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label className="min-w-[105px] flex flex-row items-center gap-2 mt-4" htmlFor="email">
          <Mail /> Email to send:
        </label>
        <Textarea
          name="emails"
          value={formData.emails}
          placeholder="Type email addresses here..."
          onChange={(e) => handleInputChange("emails", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
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

      <div className="flex flex-col gap-2">
        <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="message">
          <MessageCircleMore /> Content:
        </label>
        <div className="bg-white rounded-md border border-gray-300 h-[300px]">
          <ReactQuill
            key={quillKey}
            theme="snow"
            value={formData.message}
            onChange={handleQuillChange}
            modules={modules}
            formats={formats}
            placeholder="Type your message here... (you can format text)"
            className="h-full"
          />
        </div>
        <style jsx global>{`
          .ql-toolbar {
            position: sticky;
            top: 0;
            z-index: 10;
            background-color: #f9fafb;
          }

          .ql-container {
            height: calc(100% - 42px);
            overflow-y: auto;
          }
        `}</style>
      </div>

      <div className="flex flex-col gap-2">
        <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="imageUrl">
          <Image /> Image URL:
        </label>
        <Input
          type="url"
          id="imageUrl"
          name="imageUrl"
          required
          value={formData.imageUrl || ""}
          placeholder="https://example.com/image.jpg"
          onChange={(e) => handleInputChange("imageUrl", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <label className="min-w-[105px] flex flex-row items-center gap-2">
            <Link /> Link URLs:
          </label>
          <Button
            type="button"
            onClick={addLinkUrl}
            size="sm"
            variant="outline"
            className="flex items-center gap-1 cursor-pointer"
          >
            <Plus size={16} /> Add Link
          </Button>
        </div>

        {formData.linkUrl.map((link, index) => (
          <div key={index} className="flex gap-2 items-center">
            <Input
              type="url"
              value={link}
              placeholder={`Link ${index + 1}: https://example.com`}
              onChange={(e) => handleLinkUrlChange(index, e.target.value)}
              className="flex-1"
            />
            <Input
              type="text"
              value={formData.textLinkUrl[index] || ""}
              placeholder={`Text ${index + 1}: Link 1`}
              onChange={(e) => handleTextLinkUrlChange(index, e.target.value)}
              className="flex-1"
            />
            {formData.linkUrl.length > 1 && (
              <Button
                type="button"
                onClick={() => removeLinkUrl(index)}
                size="sm"
                variant="destructive"
                className="flex items-center gap-1 cursor-pointer"
              >
                <Trash2 size={16} />
              </Button>
            )}
          </div>
        ))}
        <p className="text-xs text-gray-500">
          Current links: {JSON.stringify(formData.linkUrl.filter((l) => l.trim() !== ""))}
        </p>
      </div>

      <Button type="submit" className="self-start mt-4 cursor-pointer">
        Send Email
      </Button>
    </form>
  );
};

export default Template1Form;
