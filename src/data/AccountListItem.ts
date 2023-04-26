import AccountCircleIcon from '../assets/account_circle.svg';
import ArticleIcon from '../assets/article.svg';
import DataProtectionIcon from '../assets/data_protection.svg';
import HelpIcon from '../assets/help.svg';

import {AccountListItemData} from '../types/AccountListItem';

const CHECKTURIO_ACCOUNT_PANEL_URL = 'https://app.checktur.io/';
const CHECKTURIO_WEBSITE_URL = 'https://www.checktur.io/';

export const data: AccountListItemData[] = [
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
