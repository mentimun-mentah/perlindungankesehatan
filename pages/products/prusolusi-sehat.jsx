import { Image } from 'antd'
import { Container, Card, Row, Col } from 'react-bootstrap'

import { WA_LINK } from 'data/product'

import Link from 'next/link'
import Button from 'antd-button-color'

import CardHighlight from 'components/Products/CardHighlight'
import style from 'components/Products/detailStyle'

const title = "PRUSolusi Sehat Syariah"

const benefitsData = [
  {
    image: "/images/benefits/solusi-1.jpeg",
    title: "Fleksibel",
    description: "Fleksibel dalam memilih tipe dan batas harga kamar rawat inap"
  },
  {
    image: "/images/benefits/cinta-3.jpeg",
    title: "Batas manfaat",
    description: "Batas manfaat tahunan hingga Rp65 miliar sesuai plan yang dipilih"
  },
  {
    image: "/images/benefits/critical-3.jpeg",
    title: "Tindakan bedah rawat jalan & rawat inap",
    description: "Perawatan 30 hari sebelum & 90 hari sesudah tindakan"
  },
  {
    image: "/images/benefits/solusi-4.jpeg",
    title: "Wilayah pertanggungan",
    description: "Biaya perawatan di luar wilayah pertanggungan akan dibayar sesuai persentase"
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
              <strong>Perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan</strong>
            </p>
            <p>
              PRUSolusi Sehat  adalah Produk Asuransi Kesehatan Tradisional yang memberikan solusi lengkap dan fleksibel untuk perlindungan kesehatan dengan pembayaran manfaat sesuai tagihan rumah sakit untuk beberapa manfaat berdasarkan plan yang dipilih pada Tabel Manfaat PRUSolusi Sehat serta jangkauan perlindungan hingga seluruh dunia yang memberikan fleksibilitas atas pilihan Perlindungan kesehatan Anda.
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
                <Image src="/images/benefits/solusi-flayer.jpeg" alt="pru solusi sehat" className="bor-rad-10px w-100" preview={false} />
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
