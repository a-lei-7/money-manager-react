import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background-color:#fff;
  padding: 12px 16px;
  >ol{
    margin: 0 -12px;
    >li{
      background-color:#d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  >button{
    background:none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 8px;
  }
`;
const NotesSection = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
  display: flex;
  align-items: center;
    >span{ margin-right: 16px; white-space: nowrap;}
    >input{
      display: block;
      width: 100%;
      height: 72px;
      border: none;
      background:none;
    }
  }
`;
const CategorySection = styled.section`
  font-size: 24px;
  >ul{
    display: flex;
    background:#c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      >.underline{
        height: 3px;
        background-color:#fd6600;
        position: absolute;
        width: 0;
        left: 50%;
        bottom: 0;
        transform: translate(-50%);
      }
      &.selected{
        background-color:#fff;
        color: #fd6600;
        >.underline{
          width: 100%;
          transition: width .3s;
        }
        }
    }
  }
`;
const NumberPadSection = styled.section`

`;


function Money() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
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
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>AC</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>+</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>-</button>
          <button>.</button>
          <button>0</button>
          <button>del</button>
          <button>ok</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}
export default Money