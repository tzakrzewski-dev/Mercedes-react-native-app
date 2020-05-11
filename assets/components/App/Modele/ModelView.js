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
  Thumbnail,
} from 'native-base';

const ModelView = ({reading}) => {
  console.log(reading.name);
  return (
    <Container>
      <Content>
        <Text style={{height: 50, fontSize: 15}}>{reading.name}</Text>
      </Content>
    </Container>
  );
};

export default ModelView;
