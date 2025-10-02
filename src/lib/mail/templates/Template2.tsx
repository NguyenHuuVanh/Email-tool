import React from "react";

interface Template2Props {
  subject?: string;
  message?: string;
}

const Template2: React.FC<Template2Props> = ({ subject = "Chào mừng đến với BigDataTech", message }) => {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          padding: "30px",
          maxWidth: "600px",
        }}
      >
        {/* Header với gradient */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            height: "80px",
            borderRadius: "8px",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "24px",
              fontWeight: "bold",
              margin: 0,
              textAlign: "center",
            }}
          >
            BigDataTech
          </h1>
        </div>

        {/* Subject */}
        <h2
          style={{
            color: "#1f2937",
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "20px",
            textAlign: "center",
            borderBottom: "2px solid #e5e7eb",
            paddingBottom: "10px",
          }}
        >
          {subject}
        </h2>

        {/* Greeting */}
        <p style={{ color: "#374151", fontSize: "16px", marginBottom: "20px" }}>
          Kính gửi <span style={{ fontWeight: "bold", color: "#667eea" }}>{fullname}</span>,
        </p>

        <div
          style={{
            backgroundColor: "#f8fafc",
            border: "2px solid #e2e8f0",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "24px",
          }}
        >
          <p
            style={{
              color: "#475569",
              fontSize: "15px",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            Chúng tôi rất vui mừng khi nhận được liên hệ từ quý khách. Đội ngũ{" "}
            <span style={{ fontWeight: "bold", color: "#667eea" }}>BigDataTech</span>
            cam kết sẽ phản hồi trong thời gian sớm nhất có thể.
          </p>
        </div>

        {/* Message */}
        {message && (
          <div
            style={{
              backgroundColor: "#fef7cd",
              border: "1px solid #f59e0b",
              borderRadius: "8px",
              padding: "16px",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                color: "#92400e",
                fontSize: "14px",
                fontWeight: "bold",
                margin: "0 0 10px 0",
              }}
            >
              📝 Nội dung yêu cầu:
            </p>
            <p
              style={{
                color: "#78350f",
                fontSize: "14px",
                margin: 0,
                whiteSpace: "pre-wrap",
                fontStyle: "italic",
              }}
            >
              "{message}"
            </p>
          </div>
        )}

        {/* Company Info */}
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "24px",
          }}
        >
          <h3 style={{ margin: "0 0 12px 0", fontSize: "16px" }}>
            🏢 Công Ty TNHH Giải Pháp Công Nghệ Phân Tích Dữ Liệu Lớn
          </h3>
          <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>📱 Mobile: (+84) 0943 833 599</p>
          <p style={{ margin: 0, fontSize: "14px" }}>✉️ Email: contact@bigdatatech.vn</p>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "16px" }}>
            Cảm ơn quý khách đã tin tưởng BigDataTech
          </p>
          <div>
            <a
              href="https://bigdatatech.vn/contact"
              style={{
                backgroundColor: "#667eea",
                color: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                marginRight: "10px",
                display: "inline-block",
                fontSize: "14px",
              }}
            >
              Liên hệ hỗ trợ
            </a>
            <a
              href="https://bigdatatech.vn"
              style={{
                backgroundColor: "#764ba2",
                color: "white",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "14px",
              }}
            >
              Trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
