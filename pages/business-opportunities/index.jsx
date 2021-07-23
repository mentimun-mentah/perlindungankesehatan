import { Col, Row, Card, Container } from 'react-bootstrap'
import { WA_LINK } from 'data/product'

import Image from 'next/image'
import Button from 'antd-button-color'

const BusinessOpportunities = () => {
  return (
    <>
      <section>
        <Container>
          <Card.Body className="p-0">
            <Row>
              <Col sm={12} md={12} lg={6} className="order-12 order-md-12 order-lg-1 order-xl-1">
                <h1 className="fs-20-s mb-4">Menurut kamu, Pekerjaan Ideal itu yang kayak gimana?</h1>
                <p className="text-justify fs-16 mb-0">
                  Apakah...
                  <br /> <br />
                  <b>Yang Selalu Ada Waktu Luang?</b> – Meskipun ada pekerjaan sehari-hari yang harus diselesaikan, tetap ada waktu buat nongkrong bareng sahabat dan keluarga.
                  <br />
                  <b>Yang Punya Banyak Koneksi?</b> – Kalau bisa lingkaran pertemanan bertambah lebar, supaya bisa makin tenar dan rejeki jadi lancar.
                  <br />
                  <b>Yang Dikelilingi Tim yang Seru?</b> – Jika ada kesulitan, temen kerja langsung membantu dan mendukung. Kerja tim jadi lebih asik.
                  <br />
                  <b>Yang Membanggakan Keluarga?</b> – Yang penting penghasilan kita selain bisa mencukupi kebutuhan pribadi, juga bisa mengajak jalan-jalan orang tua.
                </p>
                <br />
                <p className="text-justify fs-16 mb-0">
                  Peluang Bisnis ‘Tanpa Modal’ yang bisa dikerjakan secara Part Time (sampingan) atau Full Time. Menawarkan potensi penghasilan tanpa batas sesuai dengan kemauan dan kemampuan Anda sendiri!
Terbuka untuk UMUM, pria-wanita, tanpa syarat pendidikan minimal maupun pengalaman kerja
                  <br /> <br />
                  Profesi Agen Asuransi merupakan salah satu profesi yang menjanjikan masa depan yang baik, apabila profesi ini dijalani dengan komitmen, kesungguhan, dan mindset yang tepat. Pertumbuhan karir juga menjadi salah satu yang bisa anda dapatkan di Industri Bisnis Asuransi Prudential. 
                  <br /> <br />
                  <a href={WA_LINK} target="_blank" rel="noreferrer">
                    <Button
                      type="success"
                      size="large"
                      shape="round"
                      className="shadow-none mb-3"
                    >
                      Info Selengkapnya
                    </Button>
                  </a>
                </p>
              </Col>
              <Col sm={12} md={12} lg={6} className="order-1 order-md-1 order-lg-12 order-xl-12 mb-4">
                <Image 
                  width={1200} 
                  height={800} 
                  src="/images/business-opportunities.jpeg"
                  className="w-100 bor-rad-10px" 
                  alt={process.env.NEXT_PUBLIC_APP_NAME + ' business opportunities'}
                />
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <section style={{ backgroundColor: "#fff1f0" }}>
        <Container>
          <h2 className="fs-24-s mb-4 text-danger-2 text-center font-weight-bold">KENAPA PRUDENTIAL?</h2>
          <Row>
            <Col lg={6} md={12} sm={12} className="mb-4">
              <h4 className="fs-16-s mb-2 text-danger">1. KOMPENSASI</h4>
              <Image
                width={1104}
                height={764}
                src="/images/kompensasi.png"
                className="w-100 bor-rad-10px" 
                alt={process.env.NEXT_PUBLIC_APP_NAME + ' kompensasi'}
              />
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h4 className="fs-16-s mb-2 text-danger">2. JENJANG KARIR</h4>
              <Image
                width={1104}
                height={764}
                src="/images/jenjang-karir.jpg"
                className="w-100 bor-rad-10px"
                alt={process.env.NEXT_PUBLIC_APP_NAME + ' jenjang karir'}
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="">
        <Container className="about-section">
          <Card.Body className="px-lg-5 pt-lg-5 px-md-3 pt-md-3 pb-4">
            <h2 className="fs-24-s mb-4 text-center font-weight-bold">Kisah Sukses</h2>
            <Row className="align-items-center justify-content-center">
              <Col sm={12} md={12} lg={6} className="mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/svJCrcFMDXM"
                  />
                </div>
              </Col>
              <Col sm={12} md={12} lg={6} className="mb-4">
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/Gt7-_0KARu8"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <style jsx>{`
        :global(.about-section){
          border-radius: 10px;
          background-color: #f5f5f5;
        }
      `}</style>
    </>
  )
}

export default BusinessOpportunities
