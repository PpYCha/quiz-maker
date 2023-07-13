import {create} from 'zustand';

const useTraineeStore = create((set) => ({
  trainee: {
    name: '',
    category: '',
    score: 0,
    answers: [],
  },
  updateTraineeData: (data) => set((state) => ({ trainee: { ...state.trainee, ...data } })),
  resetTraineeData: () => set({ trainee: { name: '', category: '', score: 0, answers: [] } }),
}));

export default useTraineeStore;
