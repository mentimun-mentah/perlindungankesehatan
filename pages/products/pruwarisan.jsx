import { Container, Card, Row, Col } from 'react-bootstrap'
import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "Asuransi Jiwa PRUWarisan"

const benefitsData = [
  {
    image: "/images/benefits/warisan-1.jpeg",
    title: "Perlindungan Seumur hidup",
    description: "Perlindungan jiwa hingga Tertanggung berusia 99 tahun."
  },
  {
    image: "/images/benefits/warisan-2.jpeg",
    title: "Beragam Pilihan Masa Pembayaran Premi",
    description: "Masa pembayaran premi dapat di pilih mulai dari 5 tahun, 10 tahun atau 15 tahun."
  },
  {
    image: "/images/benefits/warisan-3.jpeg",
    title: "Jaminan Perlindungan Polis",
    description: "Selama Premi telah dibayarkan penuh sesuai dengan Masa Pembayaran Premi yang dipilih"
  },
  {
    image: "/images/benefits/warisan-4.jpeg",
    title: "PRUWarisan Booster (jika ada)",
    description: "Tambahan manfaat untuk Meningkatkan Uang Pertanggungan"
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
              <strong>Jaminan siap pakai untuk masa depan</strong>
            </p>
            <p>
              Memperkenalkan Asuransi Jiwa PRUWarisan (PRUWarisan), Produk Asuransi Jiwa dengan perlindungan seumur hidup, yang memberikan solusi perencanaan warisan bagi keluarga Indonesia. <br /> <br />

              Perlindungan Asuransi Jiwa Tradisional hingga usia 99 tahun dengan masa pembayaran Premi yang dapat dipilih sebagai warisan siap pakai untuk menjamin keberlangsungan masa depan.

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
                    src="https://www.youtube.com/embed/4InEmf_hEC4"
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
