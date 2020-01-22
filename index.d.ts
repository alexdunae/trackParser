// Type definitions for trackParser
// Project: trackParser

export = TrackParser;

declare function TrackParser(
  rawTrackData: string
): TrackParser.TrackParserResponse;

declare namespace TrackParser {
  export interface TrackParserResponse {
    input_trackdata_str: string;
    account_name: string | null;
    account: string | null;
    lastName: string | null;
    firstName: string | null;
    acccount: string | null;
    expMonth: string | null;
    expYear: string | null;
    track1: string | null;
    track2: string | null;
    hasTrack1: boolean;
    hasTrack2: boolean;
  }
}
