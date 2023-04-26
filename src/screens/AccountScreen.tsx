import {Column, Text, FlatList} from 'native-base';
import {useCallback} from 'react';
import {Linking} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {ListItem} from '../components/ListItem';
import {Screen} from '../components/Screen';

import AccountCircleIcon from '../assets/account_circle.svg';
import ArticleIcon from '../assets/article.svg';
import DataProtectionIcon from '../assets/data_protection.svg';
import HelpIcon from '../assets/help.svg';

const CHECKTURIO_ACCOUNT_PANEL_URL = 'https://app.checktur.io/';
const CHECKTURIO_WEBSITE_URL = 'https://www.checktur.io/';

type AccountListItemData = {
  Icon: React.FC<SvgProps>;
  title: string;
  url: string;
};

const data: AccountListItemData[] = [
  {
    url: CHECKTURIO_ACCOUNT_PANEL_URL,
    Icon: AccountCircleIcon,
    title: 'Your account',
  },
  {
    url: `${CHECKTURIO_WEBSITE_URL}/support`,
    Icon: HelpIcon,
    title: 'Help & Support',
  },
  {
    url: `${CHECKTURIO_WEBSITE_URL}/app-privacy`,
    Icon: DataProtectionIcon,
    title: 'Data Protection',
  },
  {
    url: `${CHECKTURIO_WEBSITE_URL}/terms`,
    Icon: ArticleIcon,
    title: 'Terms and conditions',
  },
  {
    url: `${CHECKTURIO_WEBSITE_URL}/imprint`,
    Icon: ArticleIcon,
    title: 'Imprint',
  },
  {
    url: `${CHECKTURIO_WEBSITE_URL}/terms`,
    Icon: ArticleIcon,
    title: 'Licenses',
  },
];

const AccountScreen = () => {
  const renderItem = useCallback(
    ({item, index}: {item: AccountListItemData; index: number}) => {
      const {Icon, title, url} = item;

      return (
        <ListItem
          onPress={() => {
            Linking.openURL(url);
          }}
          key={index}>
          <Icon />
          <Text variant="labelM" fontWeight={400}>
            {title}
          </Text>
        </ListItem>
      );
    },
    [],
  );

  return (
    <Screen scrollable={false} paddingX={0}>
      <Column safeAreaBottom flex={1}>
        <FlatList data={data} renderItem={renderItem} flexGrow={1} />
      </Column>
    </Screen>
  );
};

export default AccountScreen;
