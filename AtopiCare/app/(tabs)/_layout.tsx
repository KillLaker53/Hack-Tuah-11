import React from 'react';
import { Platform, View, useColorScheme } from 'react-native';
import AuthScreen from './AuthScreen';
import UploadPhotoScreen from "@/app/(tabs)/UploadPhotoScreen";
import AnalyzeScreen from "@/app/(tabs)/AnalyzeScreen";

export default function TabLayout() {
// <<<<<<< HEAD
    return (
        <View style={{flex: 1}}>
            {/*<AuthScreen/>*/}
            {/*<UploadPhotoScreen />*/}
            <AnalyzeScreen />
        </View>
    );
}
// =======
//   const colorScheme = useColorScheme();
//
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="explore"
//         options={{
//           title: 'Explore',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="profile"
//         options={{
//           title: 'Profile',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="UploadPhoto"
//         options={{
//           title: 'Upload Photo',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// >>>>>>> 37085ad6ef92ba12a408651378daf95062e7bb6a
