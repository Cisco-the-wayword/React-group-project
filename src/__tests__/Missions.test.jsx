/* eslint-env jest */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import Missions from '../components/Missions';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Missions component', () => {
  let mockDispatch;
  let mockMissions;
  const mockMission = {
    id: 1,
    mission_name: 'Sample Mission',
    description: 'Sample description',
    status: 'Pending',
  };

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
    mockMissions = [mockMission];
    useSelector.mockReturnValue(mockMissions);
  });

  afterEach(() => {
    useSelector.mockReset();
    useDispatch.mockReset();
  });

  it('should render missions information', async () => {
    render(<Missions />);

    await waitFor(() => {
      const missionContainer = document.querySelector('.missionContainer')  
      
      expect (missionContainer).not.toBeNull()
      expect(mockMission.mission_name).toBeInTheDocument;
      expect(mockMission.description).toBeInTheDocument;
      expect(mockMission.status).toBeInTheDocument;
    });
  });

  it('should dispatch getMissionFromAPI action when missions are empty', () => {
    mockMissions = [];
    useSelector.mockReturnValue(mockMissions);

    render(<Missions />);

    expect(mockDispatch).toHaveBeenCalled();
  });
});