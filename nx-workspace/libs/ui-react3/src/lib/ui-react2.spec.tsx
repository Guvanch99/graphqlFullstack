import { render } from '@testing-library/react';

import UiReact2 from './ui-react2';

describe('UiReact2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiReact2 />);
    expect(baseElement).toBeTruthy();
  });
});
