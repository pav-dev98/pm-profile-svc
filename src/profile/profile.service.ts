import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from './profile.entity';
@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private readonly profileRepository: Repository<Profile>,
    ){}
    async createProfile(data: {
    userId: string;
    firstName: string;
    lastName: string;
    bio?: string;
  }) {
    const profile = this.profileRepository.create(data);

    return this.profileRepository.save(profile);
  }
    getProfile(userId: string) {
    return this.profileRepository.findOne({
      where: { userId },
    });
  }
}
