import React from "react";
import logo from "../../../../public/logo.png";

interface Template3Props {
  subject?: string;
  message?: string;
  imageUrl?: string;
  linkUrl?: string[];
  textLinkUrl?: string[];
}

const Template3: React.FC<Template3Props> = ({
  subject = "BigDataTech - Thông báo quan trọng",
  message = "Bạn có một thông báo mới từ BigDataTech",
  imageUrl = "https://via.placeholder.com/150",
  linkUrl = [""],
  textLinkUrl = [""],
}) => {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "https://via.placeholder.com/200x60";

  const renderLink = () => {
    if (!linkUrl || linkUrl.length === 0) return null;

    const validLinks = linkUrl.filter((link) => link && link.trim() !== "");
    if (validLinks.length === 0) return null;

    return (
      <div>
        {validLinks.map((link, index) => {
          const linkText =
            textLinkUrl && textLinkUrl[index] && textLinkUrl[index].trim() !== ""
              ? textLinkUrl[index]
              : `Link ${index + 1}`;

          return (
            <div style={{ width: "100%", marginBottom: "8px" }} key={index}>
              <ul style={{ paddingLeft: "20px", margin: 0 }}>
                <li style={{ listStyleType: "disc" }}>
                  <a
                    style={{
                      color: "#2563eb",
                      fontWeight: "600",
                      textDecoration: "underline",
                      display: "inline-block",
                      wordBreak: "break-word",
                      fontSize: "14px",
                    }}
                    target="_blank"
                    href={link}
                    rel="noopener noreferrer"
                  >
                    {linkText}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <style type="text/css">
          {`
          ol{
              list-style: decimal;
          }
          li{
            list-style: disc;
          }
        .greeting-padding{
          padding: 30px 25px 20px;
        }

        .content-padding, .company-padding {
          padding: 0px 25px 20px; 
        }

          .message-content p {
              margin: 0 0 12px 0;
              line-height: 1.6;
            }

            .message-content p:last-child {
              margin-bottom: 0;
            }

            .message-content strong {
              font-weight: 700;
            }

            .message-content em {
              font-style: italic;
            }

            .message-content u {
              text-decoration: underline;
            }

            .message-content s {
              text-decoration: line-through;
            }

            .message-content ol,
            .message-content ul {
              margin: 12px 0;
              padding-left: 25px;
            }

            .message-content ol li,
            .message-content ul li {
              margin-bottom: 8px;
              line-height: 1.6;
            }

            .message-content a {
              color: #2563eb;
              text-decoration: underline;
            }

            .message-content h1 {
              font-size: 28px;
              font-weight: 700;
              margin: 20px 0 12px 0;
              line-height: 1.3;
              color: #1f2937;
            }

            .message-content h2 {
              font-size: 24px;
              font-weight: 700;
              margin: 18px 0 12px 0;
              line-height: 1.3;
              color: #1f2937;
            }

            .message-content h3 {
              font-size: 20px;
              font-weight: 700;
              margin: 16px 0 12px 0;
              line-height: 1.3;
              color: #1f2937;
            }

            /* ✅ Quill color classes */
            .message-content .ql-align-center {
              text-align: center;
            }

            .message-content .ql-align-right {
              text-align: right;
            }

            .message-content .ql-align-justify {
              text-align: justify;
            }

            /* ✅ Quill indent classes */
            .message-content .ql-indent-1 {
              padding-left: 3em;
            }

            .message-content .ql-indent-2 {
              padding-left: 6em;
            }


          @media only screen and (max-width: 768px) {

            .email-container {
              width: 100% !important;
              max-width: 100% !important;
            }
            
            .greeting-padding{
              padding: 20px 0 0 0 !important;
            }

            .content-padding {
              padding: 20px 0px !important; 
            }
            .company-padding {
              padding: 0px 0px 20px 0px !important; 
            }
            .company-info {
              padding: 20px 10px !important;
            }
            .greeting-title{
              padding: 10px !important;
              margin: 0 !important;
            }

            .header-image {
              width: 100% !important;
              height: 250px !important;
            }
            .greeting-text {
              font-size: 12px !important;
            }
            .message-text {
              font-size: 12px !important;
            }
            .logo-container {
              width: 150px !important;
              height: 45px !important;
            }
            .company-name {
              font-size: 12px !important;
              color: #ffffff !important;
            }
            .contact-info {
              font-size: 11px !important;
              color: #ffffff !important;
            }
          }
          
        `}
        </style>
      </head>

      <body>
        <div
          className="container"
          style={{
            width: "100%",
            backgroundColor: "#eeeeee",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          }}
        >
          <table
            role="presentation"
            cellSpacing="0"
            cellPadding="0"
            border={0}
            style={{
              width: "100%",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <tbody>
              <tr>
                <td style={{ padding: "10px" }}>
                  <table
                    role="presentation"
                    className="email-container gmail-fix"
                    cellSpacing="0"
                    cellPadding="0"
                    border={0}
                    style={{
                      margin: "0 auto",
                      width: "100%",
                      maxWidth: "680px",
                      backgroundColor: "#ffffff",
                      borderRadius: "16px",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      overflow: "hidden",
                    }}
                  >
                    <tbody>
                      <tr className="header-row">
                        <td style={{ padding: "0" }}>
                          <div
                            className="header-image"
                            style={{
                              background: "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)",
                              position: "relative",
                              width: "100%",
                              height: "425px",
                              overflow: "hidden",
                            }}
                          >
                            <img
                              src={imageUrl}
                              alt="Header"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className="greeting-padding">
                          <div
                            className="greeting-title"
                            style={{
                              backgroundColor: "#f8fafc",
                              borderRadius: "12px",
                              padding: "8px",
                              marginBottom: "20px",
                            }}
                          >
                            <p
                              className="greeting-text"
                              style={{
                                fontSize: "18px",
                                margin: "0",
                                fontWeight: "700",
                                color: "#1f2937",
                                lineHeight: "1.5",
                              }}
                            >
                              Kính gửi Quý khách hàng,
                            </p>
                          </div>
                        </td>
                      </tr>

                      {message && (
                        <tr>
                          <td className="content-padding" style={{ paddingBottom: "20px" }}>
                            <div
                              style={{
                                border: "1px solid #e5e7eb",
                                borderRadius: "12px",
                                backgroundColor: "#ffffff",
                                overflow: "hidden",
                              }}
                            >
                              <div style={{ padding: "15px" }}>
                                <div
                                  className="message-content"
                                  style={{
                                    fontSize: "16px",
                                    margin: "0",
                                    color: "#374151",
                                    lineHeight: "1.6",
                                    wordBreak: "break-word",
                                  }}
                                >
                                  <div dangerouslySetInnerHTML={{ __html: message }} />
                                </div>
                              </div>

                              <div
                                style={{
                                  padding: "15px",
                                  borderTop: "1px solid #e5e7eb",
                                  backgroundColor: "#f9fafb",
                                }}
                              >
                                {renderLink()}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}

                      <tr>
                        <td className="company-padding" style={{ paddingBottom: "20px" }}>
                          <div
                            className="company-info"
                            style={{
                              background: "linear-gradient(to right, #000000, #0f9b0f)",
                              color: "#ffffff",
                              borderRadius: "12px",
                              padding: "20px 15px",
                            }}
                          >
                            <div
                              className="logo-container"
                              style={{
                                width: "180px",
                                height: "55px",
                                marginBottom: "15px",
                                backgroundColor: "#ffffff",
                                borderRadius: "8px",
                                padding: "5px",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={logoUrl}
                                alt="BigDataTech Logo"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                  display: "block",
                                }}
                              />
                            </div>

                            <p
                              className="company-name"
                              style={{
                                margin: "0 0 10px 0",
                                fontSize: "14px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                                lineHeight: "1.4",
                                letterSpacing: "0.5px",
                              }}
                            >
                              CÔNG TY GIẢI PHÁP CÔNG NGHỆ PHÂN TÍCH DỮ LIỆU LỚN (BIGDATATECH)
                            </p>

                            <p
                              className="contact-info"
                              style={{
                                margin: "0 0 6px 0",
                                fontSize: "13px",
                                lineHeight: "1.5",
                              }}
                            >
                              Mobile / Zalo: (+84) 0943 833 599
                            </p>
                            <p
                              className="contact-info"
                              style={{
                                margin: "0",
                                fontSize: "13px",
                                lineHeight: "1.5",
                              }}
                            >
                              Email: contact@bigdatatech.vn
                            </p>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td
                          style={{
                            backgroundColor: "#f9fafb",
                            padding: "20px",
                            borderTop: "1px solid #e5e7eb",
                            textAlign: "center",
                          }}
                        >
                          <p
                            style={{
                              color: "#9ca3af",
                              fontSize: "11px",
                              margin: "0",
                              lineHeight: "1.5",
                            }}
                          >
                            ©2025 BigDataTech. Tất cả các quyền được bảo lưu.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  );
};

export default Template3;
