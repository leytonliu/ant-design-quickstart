import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Steps, Row, Col, Card } from 'antd';
// import styles from './style.less'

const { Step } = Steps;
const ButtonDemo = () => (
  <PageHeaderWrapper>
    <Card>
      <Row justify="center">
        <Col span={12}>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </Col>
      </Row>
      <Button>button</Button>
    </Card>
  </PageHeaderWrapper>
);
export default ButtonDemo;
