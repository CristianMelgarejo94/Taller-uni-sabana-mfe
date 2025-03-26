import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatISODate } from "@/helpers/date.helper"


export const ArticleCard = ({author, title, urlToImage, source, description, publishedAt, url}:any) => {
  return (
    <>
      <Card className="p-4 max-w-sm">
        <CardHeader>
          <CardTitle>{ title }</CardTitle>
          <CardDescription className="flex flex-col w-full">
            {author || source.name}
            <Badge className="place-self-center mt-2">{formatISODate(publishedAt)}</Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col justify-center items-center gap-4">
            <img className="h-50 rounded-lg justify-self-center" src={urlToImage} alt="image description"/>
            <div className="info justify-items-start">
              <div className="flex space-y-1.5 p-1.5 text-sm">
                {description}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end mt-auto">
          <Button onClick={() => window.open(url, "_blank")}>Leer más</Button>
        </CardFooter>
      </Card>
    </>
  )
}
