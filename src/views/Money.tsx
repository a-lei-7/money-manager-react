import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {TagsSection} from './Money/TagsSection';


const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;


function Money() {
  return (
    <MyLayout>
      <TagsSection/>
      <NoteSection/>
      <CategorySection>
        <ul>
          <li className="selected">
            支出
            <div className="underline"/>
          </li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className="output">100</div>
        <div className="pad">
          <button className="selected">1</button>
          <button>2</button>
          <button>3</button>
          <button className="ac">AC</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>
            <Icon name="add"/>
          </button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>
            <Icon name="reduce"/>
          </button>
          <button>.</button>
          <button>0</button>
          <button>
            <Icon name="delete"/>
          </button>
          <button className="ok">ok</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}
export default Money