import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataArticle } from 'src/app/data/data';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imgCover:string=""
  contentTitle:string=""
  contentDesc:string=""
  private id:string | null ="0"

  constructor(private route:ActivatedRoute) {
    
   }

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id=value.get("id")

    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataArticle.filter(article=> article.id == id)[0]

    this.contentTitle=result.title
    this.contentDesc=result.desc
    this.imgCover=result.photoCover
      
    
  }

}
