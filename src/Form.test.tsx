import { render, screen } from '@testing-library/react';

import { Form } from './Form';

test('getByText()', () => {
  render(<Form />);

  screen.getByLabelText('check0');
  screen.getByLabelText('check1');
  screen.getByLabelText('check2');
  screen.getByLabelText('check3');
  screen.getByLabelText('check4');
  screen.getByLabelText('check5');
  screen.getByLabelText('check6');
  screen.getByLabelText('check7');
  screen.getByLabelText('check8');
  screen.getByLabelText('check9');

  screen.getByText('button0');
  screen.getByText('button1');
  screen.getByText('button2');
  screen.getByText('button3');
  screen.getByText('button4');
  screen.getByText('button5');
  screen.getByText('button6');
  screen.getByText('button7');
  screen.getByText('button8');
  screen.getByText('button9');
});

test('getByRole()', () => {
  render(<Form />);

  screen.getByRole('checkbox', { name: 'check0' });
  screen.getByRole('checkbox', { name: 'check1' });
  screen.getByRole('checkbox', { name: 'check2' });
  screen.getByRole('checkbox', { name: 'check3' });
  screen.getByRole('checkbox', { name: 'check4' });
  screen.getByRole('checkbox', { name: 'check5' });
  screen.getByRole('checkbox', { name: 'check6' });
  screen.getByRole('checkbox', { name: 'check7' });
  screen.getByRole('checkbox', { name: 'check8' });
  screen.getByRole('checkbox', { name: 'check9' });

  screen.getByRole('button', { name: 'button0' });
  screen.getByRole('button', { name: 'button1' });
  screen.getByRole('button', { name: 'button2' });
  screen.getByRole('button', { name: 'button3' });
  screen.getByRole('button', { name: 'button4' });
  screen.getByRole('button', { name: 'button5' });
  screen.getByRole('button', { name: 'button6' });
  screen.getByRole('button', { name: 'button7' });
  screen.getByRole('button', { name: 'button8' });
  screen.getByRole('button', { name: 'button9' });
});
