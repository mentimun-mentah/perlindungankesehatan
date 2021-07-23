import { Image } from 'antd'
import { Container, Row, Col, Card } from 'react-bootstrap'

import Link from 'next/link'
import Button from 'antd-button-color'

const Home = () => {
  return (
    <>

      <Container>
        <section className="p-t-0-s p-t-60-m p-t-60-t">
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-20-s text-capitalize">
                Asuransi kesehatan yang memberikan perlindungan komplit dan fleksibel
              </h4>
              <p className="fs-16 fs-14-s text-dark">
                PRUPrime Healthcare Plus adalah produk Asuransi Tambahan (Riders) yang memberikan solusi lengkap untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit. Produk ini dirancang khusus untuk memberikan jangkauan perlindungan hingga ke seluruh dunia serta menawarkan fleksibilitas pada pilihan perlindungan kesehatan Anda*.
              </p>
              <Link href="/products/pruprime-healthcare-plus">
                <a>
                  <Button
                    type="success"
                    size="large"
                    shape="round"
                    className="shadow-none mb-3"
                  >
                    PRUPrime Healthcare Plus
                  </Button>
                </a>
              </Link>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="embed-responsive embed-responsive-16by9 bor-rad-10px shadow">
                <iframe
                  className="embed-responsive-item bor-rad-10px"
                  src="https://www.youtube.com/embed/zhq4Q53n7PQ"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <section className="py-5" style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <Image 
                preview={false}
                src="/images/education.jpeg"
                className="w-100 bor-rad-10px mb-4 mb-md-0 mb-lg-0 shadow-lg" 
                alt={process.env.NEXT_PUBLIC_APP_NAME + ' education'}
              />
            </Col>
            <Col sm={12} md={6}>
              <h3 className="fs-20-s mb-4">Education Solution</h3>
              <p className="text-justify fs-16">
                Terwujudnya cita-cita anak adalah impian setiap orang tua. Namun, seringkali impian tersebut tidak dibarengi dengan perencanaan persiapan biaya pendidikan yang matang. Bagaimana membuat perencanaan yang akurat dengan konsep time value of money dan sekaligus menciptakan penjaminan kepastian rencana tersebut tercapai?
              </p>
              <Link href="/products/prucerah">
                <a>
                  <Button
                    type="success"
                    size="large"
                    shape="round"
                    className="shadow-none mb-3"
                  >
                    PRUCerah
                  </Button>
                </a>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="fs-20-s text-center text-danger-2">Ini Solusi Terbaik</h2>
          <h4 className="text-center font-weight-light mb-4">Memberikan komitmen perlindungan keuangan anda.</h4>

          <Row>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div className="text-image-container">
                <Image 
                  preview={false}
                  className="img-fit bor-rad-10px shadow"
                  src="/images/dompet.png" alt={process.env.NEXT_PUBLIC_APP_NAME + ' dompet'}
                />
                <div className="text-image-centered fs-25">
                  Perlindungan Penghasilan
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div className="text-image-container">
                <Image 
                  preview={false}
                  className="img-fit bor-rad-10px shadow"
                  src="/images/keluarga.png" alt={process.env.NEXT_PUBLIC_APP_NAME + ' keluarga'}
                />
                <div className="text-image-centered fs-24">
                  Perlindungan Dana Pendidikan
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={4} className="mb-3">
              <div className="text-image-container">
                <Image 
                  preview={false}
                  className="img-fit bor-rad-10px shadow"
                  src="/images/karir.png" alt={process.env.NEXT_PUBLIC_APP_NAME + ' karir'}
                />
                <div className="text-image-centered fs-24">
                  Persiapan Dana Pensiun
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container className="about-section">
          <Card.Body className="p-lg-5 p-md-5">
            <Row className="align-items-center">
              <Col sm={12} md={6}>
                <Image 
                  src="/images/about.jpeg"
                  className="w-100 bor-rad-10px mb-4 mb-md-0 mb-lg-0"
                  alt={process.env.NEXT_PUBLIC_APP_NAME + ' about'} 
                />
              </Col>
              <Col sm={12} md={6}>
                <h3 className="fs-20-s mb-4">Tentang Kami</h3>
                <p className="text-justify fs-16 mb-0">
                  Kami merupakan Partner bisnis dari PT. Prudential Life Assurance sejak 2012 dan bernaung dibawah Sahadewa Agency yang Berkantor di Jl. Hangtuah No 1 Sanur - Bali. Tugas kami adalah memberikan solusi terbaik untuk perencanaan asuransi sesuai dengan kebutuhan dan kemampuan anda. serta Memberikan pelayanan yang profesional dan berintegritas untuk melayani masyarakat secara luas di seluruh Indonesia.
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <section className="pb-2 pt-0">
        <Container>
          <Row className="mb-4 align-items-center justify-content-center">
            <Col className="text-center mb-3 img-agen p-5" lg={8} md={12}>
              <Image 
                quality={60}
                width={267}
                height={267}
                src={'/images/profile.png'} 
                className="img-fit mb-2 mb-md-0 mb-lg-0 rounded-circle shadow" 
                preview={false}
                alt={process.env.NEXT_PUBLIC_APP_NAME + ' profile'}
              />
              <h5 className="fs-16-s mt-3">Kumala Devi Wibowo</h5>
              <p>
                Nama saya Kumala Devi Wibowo, saya merupakan Partner Bisnis dari Prudential Life Assurance dan bernaung di bawah Sahadewa Agency yang berkantor di Jl. Hangtuah No 1 Sanur.. saya bisa membantu anda merencanakan perlindungan keuangan anda saat ini dan masa depan keluarga anda, menggunakan produk asuransi dari Prudential.serta Memberikan pelayanan yang profesional dan berintegritas untuk melayani masyarakat secara luas di seluruh Indonesia.
              </p>
            </Col>
          </Row>
        </Container>
      </section>


      <style jsx>{`
      :global(.about-section){
        border-radius: 10px;
        background-color: #f5f5f5;
      }
      :global(.img-agen > div) {
        margin-left: auto;
        margin-right: auto;
      }
      

      :global(.text-image-container) {
        position: relative;
        text-align: center;
        color: white;
      }
      .text-image-centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      `}</style>
    </>
  )
}

export default Home
