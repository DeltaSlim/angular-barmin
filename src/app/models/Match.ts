import { Odd } from './Odd';

export interface Match {
  id : string;
  homeTeam : string;
  awayTeam : string;
  sport : string;
  matchTime : string;
  details : string;
  homePitcher : string;
  awayPitcher : string;
  odds: Odd;
  numBets: number;
  numFollows: number;
}