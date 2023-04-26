import {Box, IPressableProps, Pressable, Row} from 'native-base';
import {ReactNode} from 'react';

import ChevronRightIcon from '../assets/chevron_right.svg';

interface ListItemProps extends IPressableProps {
  onPress?: () => void;
  children: ReactNode;
  // Icon indicating the item is pressable. Will only be displayed if `onPress` is passed.
  pressableIcon?: ReactNode;
}

const defaultPressableIcon = <ChevronRightIcon />;

export const ListItem = ({
  children,
  pressableIcon = defaultPressableIcon,
  onPress,
  ...props
}: ListItemProps) => (
  <Pressable
    onPress={onPress}
    borderBottomWidth="1px"
    borderBottomColor="line.secondary"
    alignItems="flex-start"
    paddingX="20px"
    paddingY="16px"
    flexDirection="row"
    isDisabled={!onPress}
    {...props}>
    <Row flex="1" alignSelf="stretch" space="16px" alignItems="center">
      {children}
    </Row>
    {onPress && (
      <Box flexShrink="0" paddingLeft="12px">
        {pressableIcon}
      </Box>
    )}
  </Pressable>
);
