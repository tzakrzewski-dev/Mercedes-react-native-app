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

const ModelClasseAtechnical = ({reading}) => {
  console.log(reading);
  console.log(reading.initialPrice);
  console.log(reading.technicalInformation.actualMass.value);

  return (
    <List style={{height: 50, justifyContent: 'center'}}>
      <ListItem itemHeader first style={{height: 20, marginTop: 10}}>
        <Row>
          <Text
            style={{
              fontSize: 16,

              textAlignVertical: 'center',
            }}>
            {reading.price}
          </Text>
        </Row>
        <Row>
          <Text
            style={{
              fontSize: 18,
              textAlignVertical: 'center',
              fontStyle: 'normal',
              fontWeight: '700',
            }}>
            Poids:{reading.technicalInformation.actualMass.value}
            {reading.technicalInformation.actualMass.unit}
          </Text>
        </Row>
      </ListItem>
    </List>
  );
};

export default ModelClasseAtechnical;
