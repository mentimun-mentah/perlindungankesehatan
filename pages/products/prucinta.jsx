import { Container, Card, Row, Col } from 'react-bootstrap'
import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "Asuransi Jiwa Syariah PRUCinta"

const benefitsData = [
  {
    image: "/images/benefits/cinta-1.jpeg",
    title: "Manfaat meninggal dunia",
    description: "100% santunan asuransi atas beban dana tabarru` dan nilai tunai"
  },
  {
    image: "/images/benefits/cinta-2.jpeg",
    title: "Manfaat jatuh tempo",
    description: "Manfaat jatuh tempo dalam bentuk nilai tunai atas beban dana nilai tunai"
  },
  {
    image: "/images/benefits/cinta-3.jpeg",
    title: "Masa kepesertaan",
    description: "Sesuai ketentuan, masa kepesertaan bisa diperpanjang tanpa pemeriksaan kesehatan"
  },
  {
    image: "/images/benefits/cinta-4.jpeg",
    title: "Manfaat meninggal dunia karena kecelakaan",
    description: "400% santunan asuransi atas beban dana tabarru` dan nilai tunai"
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
              <strong>Buktikan Cintamu</strong>
            </p>
            <p>
              PRUCinta merupakan produk asuransi jiwa syariah tradisional yang menyediakan perlindungan komprehensif selama 20 tahun masa kepesertaan terhadap risiko meninggal dunia dan meninggal dunia karena kecelakaan. <br /> <br />

              Selain memberikan perlindungan selama 20 tahun, produk ini juga dapat diperpanjang masa kepesertaannya dengan tanpa pemeriksaan kesehatan dan manfaat jatuh tempo dalam bentuk Nilai Tunai atas beban Dana Nilai Tunai di akhir masa kepesertaan, dan manfaat lainnya termasuk perlindungan terhadap risiko meninggal dunia karena kecelakaan selama periode Mudik atau Balik Lebaran. Detail ketentuan mengenai perpanjangan masa kepesertaan dapat dilihat pada Polis.
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
                    src="https://www.youtube.com/embed/cpsbO-TxHWY"
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
