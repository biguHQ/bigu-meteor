var chatListSubs = new SubsManager();

Template.chatList.helpers({
  'chatList': function() {
    return Chats.find();
  },
 isReady: function(sub) {
  return chatListSubs.ready();  
 }
});

Template.chatList.onCreated(function() {
  chatListSubs.subscribe('Chats/list');
});