import React from "react";

interface WelcomeEmailPreviewProps {}

const ReportedEmail: React.FC<WelcomeEmailPreviewProps> = ({}) => {
  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "6px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          padding: "24px",
        }}
      >
        <div style={{ height: "4px", backgroundColor: "#16a34a", marginBottom: "16px" }} />

        {/* Greeting */}
        <p style={{ color: "#1f2937", fontSize: "16px", marginBottom: "16px" }}>Xin chào quý khách hàng,</p>

        <p
          style={{
            color: "#374151",
            fontSize: "15px",
            lineHeight: "1.6",
            marginBottom: "24px",
          }}
        >
          Cảm ơn quý khách đã gửi yêu cầu của quý khách tới <span style={{ fontWeight: "bold" }}>BigDataTech</span>.
          Chúng tôi đã nhận thư và sẽ phản hồi yêu cầu trong thời gian sớm nhất.
        </p>

        <div
          style={{
            background: "#f3f9ff",
            padding: "16px",
            borderRadius: "4px",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              color: "#111827",
              fontSize: "15px",
              fontWeight: "bold",
              margin: "0 0 8px 0",
            }}
          >
            Công Ty TNHH Giải Pháp Công Nghệ Phân Tích Dữ Liệu Lớn
          </p>
          <p style={{ color: "#374151", fontSize: "14px", margin: "0 0 4px 0" }}>Mobile: (+84) 0943 833 599</p>
          <p style={{ color: "#374151", fontSize: "14px", margin: 0 }}>Email: contact@bigdatatech.vn</p>
        </div>

        <p
          style={{
            color: "#374151",
            fontSize: "15px",
            lineHeight: "1.6",
            marginBottom: "16px",
          }}
        >
          Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào, chúng tôi sẵn sàng trợ giúp. Liên hệ với chúng tôi qua đường link
          dưới đây.
        </p>

        <p style={{ margin: 0, fontSize: "15px" }}>
          <a
            href="https://bigdatatech.vn/contact"
            target="_blank"
            style={{
              color: "#2563eb",
              textDecoration: "underline",
              marginRight: "16px",
            }}
          >
            Trợ giúp
          </a>
          <a href="https://bigdatatech.vn" target="_blank" style={{ color: "#2563eb", textDecoration: "underline" }}>
            Trang chủ
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReportedEmail;
