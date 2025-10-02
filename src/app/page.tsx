"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import EmailForm from "~/components/forms/EmailForm";
import EmailForm2 from "~/components/forms/EmailForm2";
import EmailForm3 from "~/components/forms/EmailForm3";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import ReportedEmail from "~/lib/mail/templates/ReportedEmail";
import Template2 from "~/lib/mail/templates/Template2";
import Template3 from "~/lib/mail/templates/Template3";

export default function Home() {
  const [formData, setFormData] = useState({
    emails: "",
    subject: "",
    message: "",
    template: "template1",
    company: "",
    phone: "",
    imageUrl: "",
    linkUrl: [""],
    textLinkUrl: [""],
  });

  const handleChangeData = (data: {
    emails: string;
    subject: string;
    message: string;
    template: string;
    company?: string | undefined;
    phone?: string | undefined;
    imageUrl?: string | undefined;
    linkUrl?: string[] | string | undefined;
    textLinkUrl?: string[] | string | undefined;
  }) => {
    setFormData({
      ...data,
      company: data.company || "",
      phone: data.phone || "",
      imageUrl: data.imageUrl || "",
      linkUrl: Array.isArray(data.linkUrl) ? data.linkUrl : data.linkUrl ? [data.linkUrl] : [""],
      textLinkUrl: Array.isArray(data.textLinkUrl) ? data.textLinkUrl : data.textLinkUrl ? [data.textLinkUrl] : [""],
    });
  };

  const handleTemplateChange = (templateValue: string) => {
    const newData = {
      emails: formData.emails,
      subject: "",
      message: "",
      template: templateValue,
      company: "",
      phone: "",
      imageUrl: "",
      linkUrl: [""],
      textLinkUrl: [""],
    };
    setFormData(newData);
    handleChangeData(newData);
  };

  const renderEmailTemplate = () => {
    const props = {
      subject: formData.subject || "Thông báo mới",
      message: formData.message || "Bạn có một thông báo mới.",
      company: formData.company || "Công ty ABC",
      phone: formData.phone || "0123-456-789",
      imageUrl: formData.imageUrl || "https://via.placeholder.com/150",
      linkUrl: formData.linkUrl || "https://bigdatatech.vn",
      textLinkUrl: formData.textLinkUrl || "BigDataTech",
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

  const renderEmailFormTemplate = () => {
    const props = {
      subject: formData.subject || "Thông báo mới",
      message: formData.message || "Bạn có một thông báo mới.",
      company: formData.company || "Công ty ABC",
      phone: formData.phone || "0123-456-789",
      imageUrl: formData.imageUrl || "https://via.placeholder.com/150",
      textLinkUrl: formData.textLinkUrl || [""],
      onDataChange: handleChangeData,
    };

    const form2Props = {
      formData: formData,
      onDataChange: handleChangeData,
    };

    switch (formData.template) {
      case "template1":
        return <EmailForm {...props} />;
      case "template2":
        return <EmailForm2 {...form2Props} />;
      case "template3":
        return <EmailForm3 {...form2Props} />;
      default:
        return <EmailForm {...props} />;
    }
  };

  return (
    <div className=" p-4 flex items-center justify-center h-screen bg-gray-400">
      <div className="flex w-full h-full overflow-hidden flex-row justify-center border rounded-2xl shadow-lg p-4 bg-white gap-4">
        <div className="w-[40%] h-full border-r pr-4 overflow-y-scroll">
          <h2 className="text-center font-bold text-2xl">Email Form</h2>
          <div>
            <label className="flex flex-row items-center gap-1 mb-2" htmlFor="">
              Select template <ChevronDown />
            </label>
            <Select value={formData.template} onValueChange={handleTemplateChange}>
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Choose template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="template1">Template 1</SelectItem>
                <SelectItem value="template2">Template 2</SelectItem>
                <SelectItem value="template3">Template 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="">{renderEmailFormTemplate()}</div>
        </div>
        <div className="w-[60%] h-full overflow-y-scroll">
          <h2 className="text-center font-bold text-2xl mb-4">Email Template Preview</h2>
          {renderEmailTemplate()}
        </div>
      </div>
    </div>
  );
}
