"use client";
import React from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Captions, Image, Mail, MessageCircleMore, Phone, User } from "lucide-react";
import { Button } from "../ui/button";

interface FormData {
  emails: string;
  subject: string;
  fullname: string;
  phone?: string;
  imageUrl?: string;
  message: string;
}

interface Template3FormProps {
  formData: FormData;
  onInputChange: (field: string, value: string) => void;
}

const Template3Form: React.FC<Template3FormProps> = ({ formData, onInputChange }) => {
  return (
    <>
      <div className="flex flex-col mt-4">
        <label className="min-w-[105px] flex flex-row items-center gap-2 mb-2" htmlFor="email">
          <Mail /> Email to send:
        </label>
        <Textarea
          name="emails"
          value={formData.emails}
          placeholder="Type email addresses here..."
          onChange={(e) => onInputChange("emails", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
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
          onChange={(e) => onInputChange("subject", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
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
          onChange={(e) => onInputChange("fullname", e.target.value)}
        />
      </div>

      {/* <div className="flex flex-col gap-2 mt-4">
        <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="phone">
          <Phone /> Phone:
        </label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone || ""}
          placeholder="Type phone number here..."
          onChange={(e) => onInputChange("phone", e.target.value)}
        />
      </div> */}

      <div className="flex flex-col gap-2 mt-4">
        <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="imageUrl">
          <Image /> Image URL:
        </label>
        <Input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl || ""}
          placeholder="https://example.com/image.jpg"
          onChange={(e) => onInputChange("imageUrl", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <label className="min-w-[105px] flex flex-row items-center gap-2" htmlFor="message">
          <MessageCircleMore /> Message:
        </label>
        <Textarea
          name="message"
          value={formData.message}
          placeholder="Type your message here..."
          onChange={(e) => onInputChange("message", e.target.value)}
        />
      </div>

      <Button type="submit" className="self-start mt-4 cursor-pointer">
        Send
      </Button>
    </>
  );
};

export default Template3Form;
