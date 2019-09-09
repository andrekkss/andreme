import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Text, Flex } from 'rebass';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { roxo } from '../../colors';
import { RadialGauge, RadialGaugeSeries } from "reaviz";
import { CardContainer, Card } from '../components/Card';

const Background = () => (
  <div>
    <Triangle
      color="secondaryLight"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      invertY
    />

    <Triangle
      color="backgroundDark"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: table;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: calc(100% - ${CARD_HEIGHT});

  ${MEDIA_QUERY_SMALL} {
    width: calc(100% - (${CARD_HEIGHT} / 2));
  }
`;

const ImageContainer = styled.div`
  margin: auto;
  width: ${CARD_HEIGHT};

  ${MEDIA_QUERY_SMALL} {
    width: calc(${CARD_HEIGHT} / 2);
  }
`;

const Chart = ({
  name,
  data, 
  description
}) => (
  <Card p={0}>
    <Flex style={{ height: CARD_HEIGHT }}>
      <TextContainer>
        <span>
          <Title my={2} pb={1}>
            {name}
          </Title>
        </span>
        <Text width={[1]} style={{ overflow: 'auto' }}>
         {description} 
        </Text>
      </TextContainer>
      <ImageContainer>
        <RadialGauge
                data={[{key: "" , data: data}]}
                height={200}
                width={200}
                series={<RadialGaugeSeries colorScheme={[roxo]}/>}
            />
      </ImageContainer>
    </Flex>
  </Card>
);

Chart.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired
};


const Knowledges = () => (
  <Section.Container id="knowledges" Background={Background}>
    <Section.Header name="My knowledges" icon="🙋📚" label="knowledges" />
    <StaticQuery
      query={graphql`
        query KnowledgesQuery {
            contentfulAbout {
                knowledges {
                    data
                    key
                    description
                }
          }
        }
      `}
      render={({ contentfulAbout }) => (
        <CardContainer minWidth="350px">
          {contentfulAbout.knowledges.map((p, i) => (
            <Fade bottom delay={i * 200} key={p.key}>
               <Chart name={p.key} data={p.data} description={p.description}/>
            </Fade>
          ))}
        </CardContainer>
      )}
    />
  </Section.Container>
);

export default Knowledges;
