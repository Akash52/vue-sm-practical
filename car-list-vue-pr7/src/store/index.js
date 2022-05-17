import { createStore } from 'vuex';
import ApiService from '@/services/ApiService.js';

export default createStore({
  state: {
    cars: [],
    users: [],
  },
  mutations: {
    ADD_CAR(state, car) {
      state.cars.push(car);
    },
    SET_CARS(state, cars) {
      state.cars = cars;
    },
    DELETE_CAR(state, car) {
      state.cars = state.cars.filter((c) => c.id !== car.id);
    },
    UPDATE_CAR(state, car) {
      const index = state.cars.findIndex((c) => c.id === car.id);
      state.cars.splice(index, 1, car);
    },
    ADD_USER(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    addCar({ commit }, car) {
      ApiService.postCar(car)
        .then(() => {
          commit('ADD_CAR', car);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCars({ commit }) {
      ApiService.getCars()
        .then((response) => {
          commit('SET_CARS', response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteCar({ commit }, car) {
      ApiService.deleteCar(car)
        .then(() => {
          commit('DELETE_CAR', car);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    updateCar({ commit }, car) {
      ApiService.putCar(car)
        .then(() => {
          commit('UPDATE_CAR', car);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    createUser({ commit }, user) {
      ApiService.createUser(user)
        .then(() => {
          commit('ADD_USER', user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
