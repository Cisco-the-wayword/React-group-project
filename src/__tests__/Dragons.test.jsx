/* eslint-env jest */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Dragons from '../components/Dragons';
import { reserve } from '../Redux/dragonSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Dragons component', () => {
  let mockDispatch;
  let mockDragons;
  const mockDragon = {
    id: 1,
    name: 'Sample Dragon',
    type: 'Sample Type',
    image: ['https://example.com/image.jpg'],
    reserved: false,
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    mockDragons = [mockDragon];
    useSelector.mockReturnValue({
      dragons: mockDragons,
      isLoading: false,
      error: false,
    });
  });

  afterEach(() => {
    useSelector.mockReset();
    useDispatch.mockReset();
  });

  it('should render dragons information', () => {
    const { getByText, getByAltText } = render(<Dragons />);

    const dragonImage = getByAltText('Dragon');
    const dragonName = getByText(mockDragon.name);
    const dragonType = getByText(mockDragon.type);
    const reserveButton = getByText('Reserve Dragon');

    expect(dragonImage).toBeInTheDocument();
    expect(dragonName).toBeInTheDocument();
    expect(dragonType).toBeInTheDocument();
    expect(reserveButton).toBeInTheDocument();
  });

  it('should handle reserve button click', () => {
    const { getByText } = render(<Dragons />);
    const reserveButton = getByText('Reserve Dragon');

    fireEvent.click(reserveButton);

    expect(mockDispatch).toHaveBeenCalledWith(reserve(mockDragon.id));
  });

  it('should render cancel reservation button when dragon is reserved', () => {
    mockDragons = [{ ...mockDragon, reserved: true }];
    useSelector.mockReturnValue({
      dragons: mockDragons,
      isLoading: false,
      error: false,
    });

    const { getByText } = render(<Dragons />);
    const cancelReservationButton = getByText('Cancel Reservation');

    expect(cancelReservationButton).toBeInTheDocument();
  });
});