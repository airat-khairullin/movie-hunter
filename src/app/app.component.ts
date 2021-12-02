import {Component, OnInit} from '@angular/core';
import {AngularFirestore, DocumentChangeAction} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private fireStore: AngularFirestore) {
  }

  ngOnInit() {
    this.fireStore.collection('test').snapshotChanges().subscribe((items: DocumentChangeAction<any>[]) => {
      items.map((item: DocumentChangeAction<any>) => {
        console.log(item.payload.doc.data());
      })
    })
  }
}
