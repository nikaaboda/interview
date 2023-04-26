import {SvgProps} from 'react-native-svg';

export type AccountListItemData = {
  Icon: React.FC<SvgProps>;
  title: string;
  url: string;
};
