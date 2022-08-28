import { css, SerializedStyles } from '@emotion/react';

export const container = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const item = css`
  width: 158px;
  padding: 8px;
  border: 1px solid #999;
`;

export const imageFrame = css`
  height: 96px;
  display: flex;
`;

export const imageWrapper = css`
  margin: 0 auto;
`;

export const typeTagColors: { [Key in string]: SerializedStyles } = {
  くさ: css`
    background-color: #9f0;
    color: #888;
  `,
  ほのお: css`
    background-color: #f06;
  `,
  みず: css`
    background-color: #04f;
  `,
  どく: css`
    background-color: #a0a;
  `,
  ひこう: css`
    background-color: #0ea;
    color: #888;
  `
};

export const typeTag = css`
  background-color: #888;
  color: #eee;
  font-weight: 800;

  padding: 4px;
  border-radius: 4px;
`;
