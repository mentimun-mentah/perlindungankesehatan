import { Container, Card, Row, Col } from 'react-bootstrap'
import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "PRUTotal Critical Protection (PRUTop)"

const benefitsData = [
  {
    image: "/images/benefits/total-1.jpeg",
    title: "Perlindungan yang lebih luas",
    description: "Perlindungan kondisi kritis yang komplit"
  },
  {
    image: "/images/benefits/total-2.jpeg",
    title: "Uang pertanggungan",
    description: "Maksimal uang pertanggungan per jiwa hingga Rp5 miliar"
  },
  {
    image: "/images/benefits/total-3.jpeg",
    title: "Tanpa masa bertahan hidup",
    description: "Untuk asuransi tambahan ESCC/ESCC Plus"
  },
  {
    image: "/images/benefits/cinta-4.jpeg",
    title: "Jaring pengaman",
    description: "Perlindungan atas kondisi kritis termasuk yang belum ditemukan"
  },
]

const ProductItem = () => {
  return (
    <>
      <section className="pb-0">
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">{title}</h2>
          <div className="box-description">
            <p className="mb-2">
              <strong>Wujudkan hidup bebas khawatir dengan perlindungan total</strong>
            </p>
            <p>
              PRUTotal Critical Protection merupakan Asuransi Tambahan inovatif PERTAMA yang memberikan perlindungan total atas ancaman Kondisi Kritis, termasuk yang belum ditemukan berdasarkan pada perawatan dan tindakan medis yang dilakukan, dan juga ketidakmampuan dalam menjalankan aktivitas.
              <br /> <br />
              PRUTotal Critical Protection memberikan perlindungan atas risiko terkena penyakit - penyakit baru yang akan muncul di kemudian hari layaknya jaring pengaman serta sebagai perlindungan tambahan atas Asuransi Tambahan Kondisi Kritis yang telah dimiliki saat ini.
            </p>
            <Link href={WA_LINK}>
              <a target="_blank">
                <Button
                  type="success"
                  size="large"
                  className="shadow-none"
                >
                  Info Selengkapnya
                </Button>
              </a>
            </Link>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <h2 className="font-weight-normal fs-24-s mb-3">Highlights</h2>
          <Row className="justify-content-between">
            {benefitsData.map((data, i) => (
              <Col key={i} lg={3} md={6} className="col-12 mb-4">
                <CardHighlight data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Card.Body className="py-0">
            <Row className="align-items-center justify-content-center">
              <Col sm={12} md={8}>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    allowFullScreen
                    className="embed-responsive-item bor-rad-10px"
                    src="https://www.youtube.com/embed/COW1aTgeZM0"
                  />
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Container>
      </section>

      <style jsx>{style}</style>
    </>
  )
}

export default ProductItem
