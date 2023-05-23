import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Rockets from '../components/Rockets';
import { reservation } from '../Redux/rocketsSlice';
import 'jest';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Rockets component', () => {
  let mockDispatch;
  let mockRocketList;
  const mockRocket = {
    id: 1,
    rocket_name: 'Falcon 9',
    description: 'Sample description',
    flickr_images: ['https://example.com/image.jpg'],
    reserved: false,
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    mockRocketList = [mockRocket];
    useSelector.mockReturnValue({ rocketList: mockRocketList });
  });

  afterEach(() => {
    useSelector.mockReset();
    useDispatch.mockReset();
  });

  it('should render rocket information', () => {
    const { getByText } = render(<Rockets />);
    const image = document.getElementsByClassName('img');
    expect(image).not.toBeNull();
    expect(getByText(mockRocket.rocket_name)).toBeInTheDocument();
    expect(getByText(mockRocket.description)).toBeInTheDocument();
    expect(getByText('Reserve Rocket')).toBeInTheDocument();
  });

  it('should handle reservation button click', () => {
    const { getByText } = render(<Rockets />);
    const reserveButton = getByText('Reserve Rocket');

    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton.classList.contains('reserve')).toBe(true);

    fireEvent.click(reserveButton);

    expect(mockDispatch).toHaveBeenCalledWith(reservation(mockRocket.id));
  });
});
