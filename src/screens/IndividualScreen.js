import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, View, Text} from 'react-native';
import Loading from '../components/Loading/Loading';
import Card from '../components/individual/Card';
import {getUsers} from '../services/api';

const IndividualScreen = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(true);
  const [credentials, setCredentials] = useState({
    skip: 0,
    limit: 5,
  });

  const renderItem = ({item}) => <Card item={item} />;

  const getUserList = async () => {
    setLoading(true);
    const data = await getUsers(credentials.skip, credentials.limit);
    setUsers(credentials.skip === 0 ? data.users : [...data.users, ...users]);
    setLoading(false);
  };

  const onEndReached = () => {
    if (!loading) {
      setCredentials({...credentials, skip: credentials.skip + 5});
    }
  };

  const ListFooterComponent = () => {
    return loading && <Loading />;
  };

  const ListEmptyComponent = () => {
    return (
      !loading && (
        <View>
          <Text>Not found..</Text>
        </View>
      )
    );
  };

  useEffect(() => {
    getUserList();
  }, [credentials]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        listFooterComponent={ListFooterComponent}
        listEmptyComponent={ListEmptyComponent}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};
const styles = {
  ontainer: {
    flex: 1,
  },
};
export default IndividualScreen;
