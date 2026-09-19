import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(
    private readonly profileService: ProfileService,
  ) { }

  @GrpcMethod('ProfileService', 'CreateProfile')
  createProfile(data: {
    userId: string;
    firstName: string;
    lastName: string;
    bio?: string;
  }) {
    return this.profileService.createProfile(data);
  }

  @GrpcMethod('ProfileService', 'GetProfile')
  getProfile(data: { userId: string }) {
    return this.profileService.getProfile(data.userId);
  }
}
