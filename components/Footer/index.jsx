import { Space } from 'antd'
import { Container, Col, Row } from 'react-bootstrap'

import Link from 'next/link'
import Image from 'next/image'
import Button from 'antd-button-color'

import { WA_LINK } from 'data/product'
import { aboutUsMenuData } from 'data/navbar'

const year = new Date();

const footerLinks = [
  { label: "Produk Kami", link: "/products" },
];

const socialMedia = [
  { icon: "fab fa-whatsapp", link: WA_LINK },
  { icon: "fab fa-instagram", link: process.env.NEXT_PUBLIC_INSTAGRAM },
  { icon: "fab fa-facebook-f", link: process.env.NEXT_PUBLIC_FACEBOOK },
];

const Footer = () => {
  return (
    <>
      <footer className="border-top">
        <Container className="pt-4 pt-sm-5 pt-md-5 pt-lg-5">
          <Row className="justify-content-between">
            <Col lg={4} sm={12}>
              <div className="footer-logo">
                <Image
                  quality={60}
                  src="/images/logo.png"
                  width={175}
                  height={45}
                  className="d-inline-block align-top"
                  alt={process.env.NEXT_PUBLIC_APP_NAME + ' logo - footer'}
                />
              </div>
              <Space>
                {socialMedia.map((data, i) => (
                  <a rel="noreferrer" href={data.link} target="_blank" key={i}>
                    <Button
                      aria-label="social media"
                      type="lightdark"
                      className="shadow-none"
                      style={{ borderRadius: "5px" }}
                      icon={<i className={data.icon} />}
                    />
                  </a>
                ))}
              </Space>
              <p className="text-footer mt-2 mb-0">
                perlindungankesehatan.com merupakan Konsultan Asuransi yang berpatner dengan Prudential indonesia untuk memberikan Solusi Asuransi kepada seluruh masyarakat indonesia dengan didukung digital teknologi sehingga memberikan pelayanan lebih cepat dan efisien.
              </p>
            </Col>
            <Col lg={3} sm={12} className="pl-lg-5">
              <h5 className="footer-title">Tentang Kami</h5>
              {aboutUsMenuData.map((data, i) => (
                <div key={i}>
                  {data.link ? (
                    <Link href={`/about/${data.link}`}>
                      <a className="link-section">
                        <p>{data.label}</p>
                      </a>
                    </Link>
                  ) : (
                    <a
                      rel="noreferrer"
                      href="https://payment.prudential.co.id/"
                      target="_blank"
                      className="link-section"
                    >
                      <p>{data.label}</p>
                    </a>
                  )}
                </div>
              ))}
            </Col>
            <Col lg={3} sm={12}>
              <h5 className="footer-title">Kontak Kami</h5>
              <p className="text-footer">
                <a href="#" target="_blank" className="text-decoration-none">
                  <i className="fal fa-phone mr-2" />{" "}
                  {process.env.NEXT_PUBLIC_TELEPON}
                </a>
              </p>
              <p className="text-footer">
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} className="text-decoration-none">
                  <i className="fal fa-envelope mr-2" />{" "}
                  {process.env.NEXT_PUBLIC_EMAIL}
                </a>
              </p>
              <p className="text-footer">
                <i className="fal fa-map-marker-alt mr-2" /> Jalan Hangtuah No 1 Sanur, Bali, Indonesia 80228
              </p>
            </Col>
            <Col lg={2} sm={12}>
              <h5 className="footer-title">Links</h5>
              {footerLinks.map((data, i) => (
                <Link href={data.link} key={i}>
                  <a className="link-section">
                    <p>{data.label}</p>
                  </a>
                </Link>
              ))}
              <a
                className="link-section"
                rel="noreferrer"
                target="_blank"
                href="https://payment.prudential.co.id/"
              >
                <p>Payment Link</p>
              </a>
            </Col>
          </Row>
          <hr />
        </Container>
        <Container>
          <p className="pb-3 text-center">
            Copyright &copy; {year.getFullYear()} All Rights Reserved by{" "}
            <Link href="/">
              <a className="link-section">
                perlindungankesehatan.com
              </a>
            </Link>
          </p>
        </Container>
      </footer>

      <style jsx>{`
      .footer-logo {
        display: block;
        margin-bottom: 0.6rem;
      }
      .link-section,
      .text-footer, .text-footer a {
        color: rgba(0, 0, 0, 0.7);
      }
      .text-footer {
        margin-bottom: 0.5rem;
      }
      .link-section > p,
      .link-section {
        margin-bottom: 0.5rem;
        user-select: none;
      }
      .link-section:hover {
        color: rgba(0, 0, 0, 0.85);
        text-decoration: none;
      }
      @media only screen and (max-width: 991px) {
        .footer-title {
          margin-top: 1rem;
        }
      }
      `}</style>
    </>
  )
}

export default Footer
