import { UnreadNotification } from './../../app/use-cases/unread-notification';
import { ReadNotification } from './../../app/use-cases/read-notification';
import { GetRecipientNotifications } from './../../app/use-cases/get-recipient-notifications';
import { CountRecipientNotifications } from './../../app/use-cases/count-recipient-notifications';
import { CancelNotification } from './../../app/use-cases/cancel-notification';
import { DatabaseModule } from './../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    CountRecipientNotifications,
    GetRecipientNotifications,
    ReadNotification,
    UnreadNotification,
  ],
})
export class HttpModule {}
