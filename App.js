import React from 'react';
import {View, ScrollView} from 'react-native';
import Movie from './components/Movie';

const AllMovies = ()=> {
    return (
      <ScrollView>
      <View>
        <Movie title="Doctor Sleep" year="2019" poster={require('./img/doctor-sleep.jpg')} icon_name="skull"/>
        <Movie title="Midway" year="2020" poster={require('./img/midway.jpg')} icon_name="person-rifle"/>
      </View>
      </ScrollView>
    );
};

export default AllMovies;