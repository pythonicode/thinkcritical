import { Tabs, Title, Group, Text, Blockquote, AvatarsGroup, Avatar, Badge, Accordion, Timeline, SimpleGrid, Image, Card, Divider } from '@mantine/core';
import { Notebook, Search, BuildingCommunity, Star } from 'tabler-icons-react';
import { useState } from 'react';
import RichTextEditor from '../global/RichTextEditor';

export default function Information() {
    const [text, setText] = useState(
        "Join in on <i>thought-provoking</i> conversation. And discuss <b>difficult topics</b> designed to avoid the traditional social <u>echo chambers.</u>"
    );

    return (
        <Tabs grow variant="pills" orientation="horizontal" position='center' sx={{width: 'min(95%, 700px)'}}>
        <Tabs.Tab label="Explore" icon={<Search size={14} />}>
            <SimpleGrid mx='auto' sx={{maxWidth: '75vw'}}mt='lg' cols={3} spacing='lg' breakpoints={[{ maxWidth: 'md', cols: 2, spacing: 'lg' }, { maxWidth: 'sm', cols: 1, spacing: 'lg' },]}>
                <Card p='lg' shadow='md'>
                    <Card.Section>
                        <Image src='companies/twitter.png'></Image>
                    </Card.Section>
                    <Group mt='md' position='apart'>
                        <Text weight='bold'>Twitter</Text>
                        <Badge>Social Media</Badge>
                    </Group>
                    <Text>Analyze patterns of tweets and twitter users. </Text>
                </Card>
                <Card p='lg' shadow='md'>
                    <Card.Section>
                        <Image src='companies/youtube.png'/>
                    </Card.Section>
                    <Group mt='md' position='apart'>
                        <Text weight='bold'>YouTube</Text>
                        <Badge color='red'>Videos</Badge>
                    </Group>
                    <Text>Watch content from various perspectives.</Text>
                </Card>
                <Card p='lg' shadow='md'>
                    <Card.Section>
                        <Image src='companies/nyt.png'></Image>
                    </Card.Section>
                    <Group mt='md' position='apart'>
                        <Text weight='bold'>NY Times</Text>
                        <Badge color='dark'>News</Badge>
                    </Group>
                    <Text>Read and identify bias in news stories.</Text>
                </Card>
                <Card p='lg' shadow='md'>
                    <Card.Section>
                        <Image src='companies/medium.png'></Image>
                    </Card.Section>
                    <Group mt='md' position='apart'>
                        <Text weight='bold'>Medium</Text>
                        <Badge color='yellow'>Articles</Badge>
                    </Group>
                    <Text>Find interesting and controversial articles.</Text>
                </Card>
                <Card p='lg' shadow='md'>
                    <Card.Section>
                        <Image src='companies/spotify.png'></Image>
                    </Card.Section>
                    <Group mt='md' position='apart'>
                        <Text weight='bold'>Spotify</Text>
                        <Badge color='green'>Podcasts</Badge>
                    </Group>
                    <Text>Listen to episodes and consume different ideas.</Text>
                </Card>
            </SimpleGrid>
        </Tabs.Tab>
        <Tabs.Tab label="Learn" icon={<Notebook size={14} />}>
            <Group position='center' direction='column' p='lg'>
                <Blockquote cite="- Frank Herbert">
                    It is so shocking to find out how many people do not believe that they can learn, and how many more believe learning to be difficult.
                </Blockquote>
                <Title order={3}>Content that <Text inherit component='span' color='red'>motivates</Text>, <Text inherit component='span' color='green'>educates</Text>, and <Text inherit component='span' color='blue'>inspires.</Text></Title>
                <Timeline active={1} mt='lg'>
                    <Timeline.Item title="Linear Modules">
                        <Text color='dimmed' size='sm'>Straightforward and easy to follow along.</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Have Variety">
                        <Text color='dimmed' size='sm'>Find content that suits your interests.</Text>
                    </Timeline.Item>
                    <Timeline.Item title="Engage Meaningfully">
                        <Text color='dimmed' size='sm'>Learn through consuming and producing dynamically.</Text>
                    </Timeline.Item>
                </Timeline>
            </Group>
        </Tabs.Tab>
        <Tabs.Tab label="Contribute" icon={<BuildingCommunity size={14} />}>
            <Group position='center' direction='column' p='lg'>
                <Group position='center'>
                <AvatarsGroup limit={3}>
                    <Avatar src='https://i.pravatar.cc/150?img=7'/>
                    <Avatar src='https://i.pravatar.cc/150?img=58'/>
                    <Avatar src='https://i.pravatar.cc/150?img=41'/>
                    {[...Array(18)].map((e, i) => <Avatar key={i}/>)}
                </AvatarsGroup>
                <Badge>Community Member</Badge>
                </Group>
                <Group grow mt='lg'>
                    <Group direction='column' position='center'>
                        <Group spacing={1} position='center'>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                            <Star/>
                        </Group>
                        <Blockquote sx={{textAlign: 'center'}}icon={null}>
                            Build interactive modules to share your experience and opinions.
                        </Blockquote>
                    </Group>
                </Group>
                <RichTextEditor mt='lg' value={text} onChange={setText} controls={[['bold', 'italic', 'underline'], ['alignCenter', 'alignLeft', 'alignRight']]}/>
            </Group>
        </Tabs.Tab>
        </Tabs>
    );
}