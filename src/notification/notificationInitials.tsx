import notifee, {
  AndroidNotificationSetting,
  AndroidStyle,
} from '@notifee/react-native';

export const addBadgeCount = async () => {
  notifee.setBadgeCount(1).then(() => console.log('Badge Count'));
};

export const displayNotification = async (
  title: string,
  message: string,
  image: string,
  categoryId: string,
) => {
  const channelID = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
    sound: 'notification',
  });

  await notifee.displayNotification({
    title: title,
    body: message,
    android: {
      channelId: channelID,
      sound: 'notification',
      onlyAlertOnce: true,
      smallIcon: 'ic_stat_name',
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: image || require('../assets/images/launch.png'),
      },
      actions: [
        {
          title: 'Okay',
          pressAction: {
            id: categoryId,
            launchActivity: 'default',
          },
        },
      ],
    },
    ios: {
      categoryId: categoryId,
      attachments: [
        {
          url: image || require('../assets/images/launch.png'),
          thumbnailHidden: false,
        },
      ],
      foregroundPresentationOptions: {
        badge: true,
        sound: true,
        banner: true,
        list: true,
      },
      sound: 'notification.wav',
    },
  });
};

export const setCategories = async () => {
  await notifee.setNotificationCategories([
    {
      id: 'water-intake',
      actions: [{id: 'water-intake', title: 'Okay', foreground: true}],
    },
    {
      id: 'drink-action',
      actions: [{id: 'drink-action', title: 'I Drank Water', foreground: true}],
    },
  ]);
};
