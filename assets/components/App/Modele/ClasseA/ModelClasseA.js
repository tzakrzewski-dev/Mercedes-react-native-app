import React, {Component} from 'react';

import {
  Container,
  Content,
  ListItem,
  Left,
  Body,
  Right,
  Text,
  List,
  Col,
  Thumbnail,
  Row,
} from 'native-base';

const ModelClasseA = ({reading}) => {
  console.log(reading.name);
  console.log(reading.priceInformation.price);
  console.log(reading.priceInformation.currency);
  return (
    <List style={{height: 50, justifyContent: 'center'}}>
      <ListItem itemHeader first style={{height: 20, marginTop: 10}}>
        <Row>
          <Text
            style={{
              fontSize: 16,

              textAlignVertical: 'center',
            }}>
            {reading.name}
          </Text>
        </Row>
        <Row>
          <Text
            style={{
              fontSize: 16,
              textAlignVertical: 'center',
              fontStyle: 'italic',
              fontWeight: '700',
            }}>
            A partir de :{reading.priceInformation.price}{' '}
            {reading.priceInformation.currency}
          </Text>
        </Row>
      </ListItem>
    </List>
  );
};

export default ModelClasseA;
