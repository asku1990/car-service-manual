import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layout';

describe('RootLayout', () => {
  it('renders with correct HTML structure and children', () => {
    const testContent = 'Test Content';
    render(
      <RootLayout>
        <div>{testContent}</div>
      </RootLayout>
    );

    // Check if the main HTML structure is correct
    const htmlElement = document.documentElement;
    expect(htmlElement).toHaveAttribute('lang', 'en');

    // Check if the body contains the main element
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();

    // Check if children are rendered inside main
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
