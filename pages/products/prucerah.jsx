import { Container, Card, Row, Col } from 'react-bootstrap'

import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "Asuransi Jiwa Syariah PRUCerah plan PRUCerah Plus"

const benefitsData = [
  {
    image: "/images/benefits/cerah-1.jpeg",
    title: "Manfaat Dana Pendidikan",
    description: "Manfaat Penarikan Tunai Sekaligus dan Berkala (bulanan) untuk Dana Pendidikan Anak."
  },
  {
    image: "/images/benefits/cerah-2.jpeg",
    title: "Manfaat Bebas Kontribusi",
    description: "Apabila Peserta Tambahan Yang Diasuransikan Meninggal Dunia, terkena Cacat Tetap Total atau terkena salah satu dari 60 Kondisi Kritis."
  },
  {
    image: "/images/benefits/cerah-3.jpeg",
    title: "Pilihan Masa Pembayaran Kontribusi",
    description: "Masa Pembayaran Kontribusi 5 Tahun atau sesuai dengan Masa Tunggu Manfaat Dana Pendidikan yang dipilih."
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
              <strong>Wujudkan Masa Depan Cerah Buah Hati dengan Pendidikan Tinggi</strong>
            </p>
            <p>
              Memperkenalkan Asuransi Jiwa Syariah PRUCerah Produk Asuransi Dwiguna yang memberikan Perlindungan atas Jaminan Pendidikan Anak atau orang yang Anda sayangi.  Terdapat Manfaat Dana Pendidikan, yang memberikan manfaat berupa Penarikan Tunai Sekaligus serta Penarikan Tunai Bulanan selama 4 tahun. Selain itu untuk menjamin keberlangsungan Pendidikan Anak Anda maka produk ini memberikan Manfaat Bebas Kontribusi jika Anda Meninggal Dunia, Terkena Kondisi Kritis atau mengalami Cacat Tetap dan Total.
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
              <Col key={i} lg={4} md={6} className="col-12 mb-4">
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
                    src="https://www.youtube.com/embed/kSMFUp_cpjc"
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
