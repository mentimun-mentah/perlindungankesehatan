import { Container, Card, Row, Col } from 'react-bootstrap'
import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "PRUPrime Healthcare Plus Syariah"

const benefitsData = [
  {
    image: "/images/benefits/total-2.jpeg",
    title: "Komplit dan fleksibel",
    description: "Lebih komplit dan fleksibel dalam memilih tipe dan batas harga kamar rawat inap dan area perlindungan sesuai plan yang dipilih"
  },
  {
    image: "/images/benefits/cinta-3.jpeg",
    title: "Batas manfaat tahunan",
    description: "Untuk Plan Diamond dengan batas manfaat tahunan Rp15Miliar ditambah PRUPrime Limit Booster Rp50Miliar"
  },
  {
    image: "/images/benefits/total-3.jpeg",
    title: "Tindakan bedah rawat jalan & rawat inap",
    description: "Perawatan 30 hari sebelum dan 90 hari sesudah tindakan bedah rawat jalan dan rawat inap"
  },
  {
    image: "/images/benefits/cinta-4.jpeg",
    title: "Manfaat rawat jalan kanker dan cuci darah",
    description: "Pembayaran rawat jalan sesuai tagihan untuk perawatan kanker dan cuci darah dengan mengikuti ketentuan polis yang berlaku."
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
              <strong>Solusi lengkap untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit.</strong>
            </p>
            <p>
              PRUPrime Healthcare Plus atau populer disebut PPH Plus adalah produk baru Asuransi Kesehatan yang baru diluncurkan oleh Prudential pada awal tahun 2019. Sehingga ini merupakan produk yang masih sangat baru dan luar biasa bagus manfaat yang ditawarkan sekaligus murah meriah. Asuransi Kesehatan berguna untuk melindungi kita dari tagihan biaya rumah sakit yang tidak terduga.
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
                    src="https://www.youtube.com/embed/dCWnU7rtCqU"
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
