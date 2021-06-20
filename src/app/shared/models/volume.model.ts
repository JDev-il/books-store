import { BookModel } from "./book.model";
export class VolumeModel {
    kind?: string;
    id?: number;
    etag?: string;
    selfLink?: string;
    selfInfo?: {};
    volumeInfo?: BookModel;

    constructor(volume?: VolumeModel){
        this.kind = volume.kind;
        this.id = volume.id;
        this.etag = volume.etag;
        this.selfLink = volume.selfLink;
        this.selfInfo = volume.selfInfo;
        this.volumeInfo = volume.volumeInfo;
    }
}