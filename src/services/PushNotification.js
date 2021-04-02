import PushNotification from 'react-native-push-notification'

PushNotification.configure({
  onNotification: function(notification) {
    console.log('LOCAL NOTIFICATION ==>', notification)
  },

  popInitialNotification: true,
  requestPermissions: true
})

PushNotification.createChannel(
    {
      channelId: "channel-id", 
      channelName: `Sound channel`, 
      channelDescription: "A sound channel", 
      importance: 4, 
      vibrate: true, 
    },
  );




export const ScheduledLocalNotification = () => {
  PushNotification.localNotificationSchedule({
    //   id: '123',
    autoCancel: true,
    largeIconUrl: 'https://firebasestorage.googleapis.com/v0/b/hydroapp-230c0.appspot.com/o/glass-of-water.png?alt=media&token=0a56fff3-4e8d-42be-a5b2-3f541f4f5049',
    title: 'Drink Reminder',
    message: 'Have a drink of water',
    vibrate: true,
    vibration: 500,
    date: new Date(Date.now()), 
    repeatType: 'time',
    repeatTime: 7200 * 1000,
    // repeatTime: 10 * 1000,
    channelId: 'channel-id'
    
  })
}

