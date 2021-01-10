import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../progress"
import LinkAnimated from "../linkAnimated"

const SkillsProgress = () => (
  <div>
    <h2>
        <LinkAnimated selected> My Skills </LinkAnimated>
    </h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={95} text="Javascript" />
        <ProgressBar percent={85} text="ReactJS" />
        <ProgressBar percent={70} text="Android" />
        <ProgressBar percent={85} text="Kotlin" />
        <ProgressBar percent={80} text="NodeJS" />
        <ProgressBar percent={60} text="Typescript" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={40} text="Flutter" />
        <ProgressBar percent={90} text="React-Native" />
        <ProgressBar percent={55} text="Dart" />
        <ProgressBar percent={50} text="Docker" />
        <ProgressBar percent={30} text="IOS/Swift" />
        <ProgressBar percent={40} text="C#" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
