import {
  Box,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyledProps,
} from 'native-base';
import {FC, ReactNode, useMemo} from 'react';
import {Platform} from 'react-native';

interface ScreenProps extends StyledProps {
  scrollable?: boolean;
  children: ReactNode;
}

const ScrollableScreenContent: FC<{children: ReactNode}> = ({children}) => (
  <ScrollView contentContainerStyle={{flexGrow: 1}}>{children}</ScrollView>
);

const NoScrollScreenContent = ({children}: {children: ReactNode}) => (
  <Box flexGrow={1} maxHeight="100%">
    {children}
  </Box>
);

export const Screen = ({
  scrollable = true,
  children,
  ...props
}: ScreenProps) => {
  const Content = useMemo(() => {
    return scrollable ? ScrollableScreenContent : NoScrollScreenContent;
  }, [scrollable]);

  return (
    <KeyboardAvoidingView
      flex={1}
      height="100%"
      paddingX="20"
      bgColor="white"
      behavior={Platform.select({ios: 'padding', android: 'padding'})}
      {...props}>
      <StatusBar />
      <Content>{children}</Content>
    </KeyboardAvoidingView>
  );
};
